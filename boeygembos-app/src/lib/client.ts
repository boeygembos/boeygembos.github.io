import client from '../tina/__generated__/client'

export async function getGalleryData() {
  try {
    const { data } = await client.queries.gallery({ relativePath: 'gallery.json' })
    return data.gallery.photos || []
  } catch (error) {
    console.error('Error fetching gallery data:', error)
    return []
  }
}

export async function getBosklasData() {
  try {
    const { data } = await client.queries.bosklas({ relativePath: 'bosklas.json' })
    return data.bosklas
  } catch (error) {
    console.error('Error fetching bosklas data:', error)
    return null
  }
}

export async function getContactData() {
  try {
    const { data } = await client.queries.contact({ relativePath: 'contact.json' })
    return data.contact
  } catch (error) {
    console.error('Error fetching contact data:', error)
    return null
  }
}
