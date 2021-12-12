import React from 'react'

const One = () => {
    return (
      <>
        <div class="w-1/3">
          <div class="animate-pulse">
            <div class="mt-8 h-4 gradient-purple-pink-red rounded-full w-4/5"></div>
            <div class="py-6">
              <div class="my-4">
                <div class="h-3 my-3 gradient-purple-pink-red rounded-full w-4/6"></div>
                <div class="h-3 my-3 gradient-purple-pink-red rounded-full w-3/6"></div>
                <div class="h-3 my-3 gradient-purple-pink-red rounded-full w-2/6"></div>
              </div>
              <div class="my-6">
                <div class="h-3 my-3 gradient-purple-pink-red rounded-full w-5/6"></div>
                <div class="h-3 my-3 gradient-purple-pink-red rounded-full w-4/6"></div>
                <div class="h-3 my-3 gradient-purple-pink-red rounded-full w-2/6"></div>
              </div>
              <div class="my-6 flex items-center space-x-3">
                <div class="h-10 w-10 gradient-purple-pink-red rounded-full"></div>
                <div class="h-3 gradient-purple-pink-red rounded-full w-1/12"></div>
                <div class="h-3 gradient-purple-pink-red rounded-full w-1/6"></div>
              </div>
              <div class="my-6 h-3 gradient-purple-pink-red rounded-full w-1/6"></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default One
