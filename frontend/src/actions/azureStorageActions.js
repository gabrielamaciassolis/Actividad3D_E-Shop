import { BlobServiceClient, ContainerClient } from '@azure/storage-blob'

// THIS IS SAMPLE CODE ONLY - DON'T STORE TOKEN IN PRODUCTION CODE
const sasToken = process.env.storagesastoken || '' // Fill string with your SAS token
const containerName = `cloudimages`
const storageAccountName = process.env.storageresourcename || '' // Fill string with your Storage resource name

// <snippet_createBlobInContainer>
const createBlobInContainer = async (containerClient, file) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name)

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } }

  // upload file
  await blobClient.uploadBrowserData(file, options)
}
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async (file) => {
  if (!file) return {}

  console.log('uploading')

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  )

  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName)
  await containerClient.createIfNotExists({
    access: 'container',
  })

  // upload file
  await createBlobInContainer(containerClient, file)

  //    // get list of blobs in container
  //    return getBlobsInContainer(containerClient);
}
// </snippet_uploadFileToBlob>

export default uploadFileToBlob
