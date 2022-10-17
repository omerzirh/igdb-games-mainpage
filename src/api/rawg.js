import axios from 'axios'

const fetchData = async (path) => {
  if (path) {
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/${path}?key=${process.env.REACT_APP_RAWG_KEY}`
      )
      return data.data
    } catch (err) {
      console.error(err)
    }
  } else if (path) {
    try {
      const data = await axios.get(path)
      return data.data
    } catch (err) {
      console.error(err)
    }
  } else {
    console.error('cannot trigger API request: no path or keyChar provided')
  }
}

export default fetchData;