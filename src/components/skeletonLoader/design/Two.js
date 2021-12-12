import React from 'react'

const Two = () => {
    return (
      <>
        <div className="w-100">
          <div className="animate-pulse">
            <div className="gradient-purple-pink-red h-6 rounded-t-3xl"></div>
            <div className="py-4 px-6">
              <div className="flex items-center space-x-2">
                <div className="h-7 w-7 gradient-purple-pink-red rounded-full"></div>
                <div className="h-3 gradient-purple-pink-red rounded-full w-1/3"></div>
              </div>
              <div className="my-6">
                <div className="h-5 gradient-purple-pink-red rounded-full w-3/4"></div>
                <div className="my-4">
                  <div className="h-3 my-2 gradient-purple-pink-red rounded-full w-full"></div>
                  <div className="h-3 my-2 gradient-purple-pink-red rounded-full w-5/6"></div>
                  <div className="h-3 my-2 gradient-purple-pink-red rounded-full w-4/6"></div>
                  <div className="h-3 my-2 gradient-purple-pink-red rounded-full w-5/6"></div>
                  <div className="h-3 my-2 gradient-purple-pink-red rounded-full w-3/6"></div>
                  <div className="h-3 my-2 gradient-purple-pink-red rounded-full w-2/6"></div>
                </div>
              </div>
              <div className="my-4">
                <div className="h-11 gradient-purple-pink-red rounded-lg w-full"></div>
                <div className="h-3 my-4 mx-auto gradient-purple-pink-red rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Two
