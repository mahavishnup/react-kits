import React from 'react'

const One = () => {
    return (
      <>
        <div className="w-100">
          <div className="animate-pulse">
            <div className="mt-8 h-4 gradient-purple-pink-red rounded-full w-4/5"></div>
            <div className="py-6">
              <div className="my-4">
                <div className="h-3 my-3 gradient-purple-pink-red rounded-full w-4/6"></div>
                <div className="h-3 my-3 gradient-purple-pink-red rounded-full w-3/6"></div>
                <div className="h-3 my-3 gradient-purple-pink-red rounded-full w-2/6"></div>
              </div>
              <div className="my-6">
                <div className="h-3 my-3 gradient-purple-pink-red rounded-full w-5/6"></div>
                <div className="h-3 my-3 gradient-purple-pink-red rounded-full w-4/6"></div>
                <div className="h-3 my-3 gradient-purple-pink-red rounded-full w-2/6"></div>
              </div>
              <div className="my-6 flex items-center space-x-3">
                <div className="h-10 w-10 gradient-purple-pink-red rounded-full"></div>
                <div className="h-3 gradient-purple-pink-red rounded-full w-1/12"></div>
                <div className="h-3 gradient-purple-pink-red rounded-full w-1/6"></div>
              </div>
              <div className="my-6 h-3 gradient-purple-pink-red rounded-full w-1/6"></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default One
