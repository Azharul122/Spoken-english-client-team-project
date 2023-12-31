import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ReviewCourses from "./ReviewCourses";

interface Course {
  _id: string;
  imageURL: string;
  courseName: string;
  courseDetails: string;
  price: number;
  instructorName: string;
  instructorEmail: string;
  numberOfStudents: number;
}

interface EnrollmentData {
  courseId: string;
  courseName: string;
  price: number;
  instructorName: string;
  instructorEmail: string;
  numberOfStudents: number;
}

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    // Fetch course details by courseId
    fetch(`https://spoken-english-server-xi.vercel.app/course/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course details:", error));

    // Fetch reviews by course name
    [id];
  });
  if (!course) {
    return <div>Loading...</div>;
  }

  const enrollmentData: EnrollmentData = {
    courseId: course._id,
    courseName: course.courseName,
    price: course.price,
    instructorName: course.instructorName,
    instructorEmail: course.instructorEmail,
    numberOfStudents: course.numberOfStudents,
  };
  console.log(enrollmentData);

  return (
    <div className="mt-[60px] container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        {course.courseName}
      </h1>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <img src={course.imageURL} className="w-full h-auto mb-4" />
        <p className="text-gray-600 mb-4">{course.courseDetails}</p>
        <p className="font-bold text-xl text-black mb-2">
          Price: ${course.price}
        </p>
        <div className="flex justify-center">
          {
            course.courseName==="Advanced English Mastery"? (<Link
              to={{
                pathname: "/quiz-starter",
              }}
              state={course}
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Enroll Now
            </Link>):(<Link
            to={{
              pathname: "/checkout",
            }}
            state={course}
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Enroll Now
          </Link>)
            // if(courseName=="Spoken English Fluently")
            // {

            // }
            // else{
              
            // }
          }
          
        </div>
      </div>

      <ReviewCourses />
    </div>
  );
};

export default CourseDetails;
