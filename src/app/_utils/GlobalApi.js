import request, { gql } from "graphql-request";

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +"/master"

// const MASTER_URL ="https://api-ap-south-1.hygraph.com/v2/cls384fx10fj501w45f3f2jun/master"

const getAllCourseList = async()=>{
    const query = gql`query Assets {
      courseLists {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
      }
    }`

      try {
        const result = await request(MASTER_URL, query);
      return result;
      } catch (error) {
        console.log(error)
      }
}

export default {
    getAllCourseList
}