'use client'
import React, { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar';
import Coursecard from '@/components/Coursecard';
import ProtectedLayout from '@/components/ProtectedLayout';
import { app } from '@/firebase/config'; // Import initialized Firebase app
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/auth'

const page = () => {

  const [courses, setCourses] = useState([]);

  // Initialize Firestore
  const db = getFirestore(app);
  const mappedData = [];
  useEffect(() => {
    // Define the reference to the "courses" collection in Firestore
    collectionRef.get().then(snapshot => {
      // Loop through each document
      snapshot.forEach(courses => {
        // Get the data for the document
        const data = courses.data();

        // Map the data to a new object
        const mappedObject = {
          id: courses.id,
          title: courses.title,
          description: courses.description,
          instructor: courses.instructor,
          image: courses.image,
          price: courses.price,
        };

        // Add the mapped object to the array
        mappedData.push(mappedObject);
      });

      // Return the mapped data
      return mappedData;
    }).then(mappedData => {
      // Do something with the mapped data
      console.log(mappedData);
    });
    return () => {
      unsubscribe();
    };
  }, [db]);




  return (
    <ProtectedLayout>
      <div className="flex h-screen ">
        {/* Sidebar */}
        <div className="w-64 h-full">
          <Sidebar />
        </div>

        <div className="flex flex-1 flex-wrap justify-center gap-12 p-8 m-4">
          {mappedData.map((course, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="overflow-hidden">
                <Coursecard id={course.id} title={course.title} description={course.description} instructor={course.instructor} image={course.image} price={course.price} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </ProtectedLayout>

  )
}

export default page