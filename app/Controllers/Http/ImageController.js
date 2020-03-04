'use strict'

const Helpers = use('Helpers')
const User = use('App/Models/User')
const Image = use('App/Models/Image')

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`))
  }

  /**
   * Create/save a new image.
   * POST images
   */
  async store ({ params, request }) {
    const user = await User.findOrFail(params.id)
  
    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })
    var newFilename = `${Date.now()}-${images.clientName}`
    await images.move(Helpers.tmpPath('uploads'),{
      name: newFilename,
    }).then(

      Image.create({

        "user_id": user.id,
        "path": "/tmp/uploads/"+newFilename,
  
      })
        
    )    
  
    if (!images.moved()) {
      return images.errors()
    }

  return 'successfully loaded'
   
}
}
module.exports = ImageController
