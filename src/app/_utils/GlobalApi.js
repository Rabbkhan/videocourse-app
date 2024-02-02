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
        slug
      }
    }`

      try {
        const result = await request(MASTER_URL, query);
      return result;
      } catch (error) {
        console.log(error)
      }
}

const getSideBanner = async()=>{

  const query = gql `
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
      }
      url
    }
  }
  `
  try {
    const result = await request(MASTER_URL, query);
  return result;
  } catch (error) {
    console.log(error)
  }

}


const getCourseById= async(courseId)=>{
  const query= gql`query MyQuery {
    courseList(where: {slug: "`+courseId+`"}) {
      author
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      slug
      sourceCode
      totalChapters
      slug
    }
  }
  `
  try {
    const result = await request(MASTER_URL, query);
  return result;
  } catch (error) {
    console.log(error)
  }

}

const enrollToCourse = async (courseId,email)=>{
  const query=gql`
  mutation MyMutation {
    createUserEnrollCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  try {
    const result = await request(MASTER_URL, query);
  return result;
  } catch (error) {
    console.log(error)
  }
}

export default {
    getAllCourseList, getSideBanner,getCourseById,enrollToCourse
}