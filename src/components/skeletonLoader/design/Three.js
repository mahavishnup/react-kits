import React from 'react'

const Three = () => {
    return (
      <>
        <div class="w-100">
          <div class="flex items-center justify-center animate-pulse">
            <div class="w-64 bg-white rounded">
              <div class="h-32 bg-gray-200 rounded-tr rounded-tl animate-pulse"></div>

              <div class="p-5">
                <div class="h-6 rounded-sm bg-gray-200 animate-pulse mb-4"></div>

                <div class="grid grid-cols-4 gap-1">
                  <div class="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                  <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                  <div class="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                  <div class="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                  <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                  <div class="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                  <div class="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                  <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Three
