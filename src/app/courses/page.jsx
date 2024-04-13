'use client'
import React, { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar';
import Coursecard from '@/components/Coursecard';
import { courses } from '@/asset/data';
import ProtectedLayout from '@/components/ProtectedLayout';

const page = () => {




  return (
    <ProtectedLayout>
      <div className="flex h-screen ">
        {/* Sidebar */}
        <div className="w-64 h-full">
          <Sidebar />
        </div>

        <div className="flex flex-1 flex-wrap justify-center gap-12 p-8 m-4">
          {courses.map((course, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="overflow-hidden"> {/* Suppress inner scroll */}
                <Coursecard course={course} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </ProtectedLayout>

  )
}

export default page