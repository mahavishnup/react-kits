import React from 'react'

const Two = () => {
    return (
      <>
        <div class="w-1/3">
          <div class="animate-pulse">
            <div class="gradient-purple-pink-red h-6 rounded-t-3xl"></div>
            <div class="py-4 px-6">
              <div class="flex items-center space-x-2">
                <div class="h-7 w-7 gradient-purple-pink-red rounded-full"></div>
                <div class="h-3 gradient-purple-pink-red rounded-full w-1/3"></div>
              </div>
              <div class="my-6">
                <div class="h-5 gradient-purple-pink-red rounded-full w-3/4"></div>
                <div class="my-4">
                  <div class="h-3 my-2 gradient-purple-pink-red rounded-full w-full"></div>
                  <div class="h-3 my-2 gradient-purple-pink-red rounded-full w-5/6"></div>
                  <div class="h-3 my-2 gradient-purple-pink-red rounded-full w-4/6"></div>
                  <div class="h-3 my-2 gradient-purple-pink-red rounded-full w-5/6"></div>
                  <div class="h-3 my-2 gradient-purple-pink-red rounded-full w-3/6"></div>
                  <div class="h-3 my-2 gradient-purple-pink-red rounded-full w-2/6"></div>
                </div>
              </div>
              <div class="my-4">
                <div class="h-11 gradient-purple-pink-red rounded-lg w-full"></div>
                <div class="h-3 my-4 mx-auto gradient-purple-pink-red rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Two
