import request, { gql } from "graphql-request";

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +"/master"


const getAllCourseList = async()=>{
    const query = gql `query Assets {
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
  const query= gql `query MyQuery {
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
  const query=gql`mutation MyMutation {
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

const checkUserEnrollToCourse = async(courseId, userEmail) =>{
  const query= gql `query MyQuery {
    userEnrollCourses(where: {courseId: "`+ courseId+`", userEmail: "`+ userEmail+`"}) {
      id
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


const getUserEnrollCourseDetails = async(id,email) =>{
  const query = gql `query MyQuery {
    userEnrollCourses(where: {id: "`+id+`", userEmail: "`+email+`"}) {
      courseId
      id
      userEmail
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        
      }
      courseList {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            shortDesc
            video {
              url
            }
          }
        }
        demoUrl
        description
        free
        id
        slug
        sourceCode
        totalChapters
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
const markChapterCompleted= async (enrollId,chapterId)=>{
  const query=gql `mutation MyMutation {
    updateUserEnrollCourse(
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+chapterId+`"}}}}}
      where: {id: "`+enrollId+`"}
    ) {
      id
    }
    publishUserEnrollCourse(where: {id: "`+enrollId+`"}) {
      id
    }
  }
  `
  try {
    const result = await request(MASTER_URL, query);
  // console.log(result)
  return result;
  } catch (error) {
    console.log(error)
  }

}


const getUserAllEnrolledCourseList = async(email)=>{

  const query = gql `query MyQuery {
    userEnrollCourses(where: {userEmail: "`+email+`"}) {
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseId
      courseList {
        name
        id
        totalChapters
        slug
        free
        description
        demoUrl
        sourceCode
        chapter {
          ... on Chapter {
            id
            name
          }
        }
        author
        banner {
          id
        }
      }
    }
  }
  `
  try {
    const result = await request(MASTER_URL, query);
  // console.log(result)
  return result;
  } catch (error) {
    console.log(error)
  }
}

const addNewMember  = async(email,paymentId) =>{
  const query = gql `mutation MyMutation {
    createMembership(data: {active: true, email: "`+email+`", paymentId: "`+paymentId+`"}) {
      id
    }
    publishManyMemberships(to: PUBLISHED) {
      count
    }
  }`
  try {
    const result = await request(MASTER_URL, query);
  // console.log(result)
  return result;
  } catch (error) {
    console.log(error)
  }
}

const checkForMemberShip  = async(email) =>{

  const query = gql `
  query MyQuery {
    memberships(where: {email: "`+email+`"}) {
      email
      id
      paymentId
      createdAt
    }
  }`
  try {
    const result = await request(MASTER_URL, query);
  // console.log(result)
  return result;
  } catch (error) {
    console.log(error)
  }
}

export default {
    getAllCourseList, getSideBanner,getCourseById,enrollToCourse,checkUserEnrollToCourse,getUserEnrollCourseDetails,markChapterCompleted,getUserAllEnrolledCourseList,addNewMember,checkForMemberShip
}