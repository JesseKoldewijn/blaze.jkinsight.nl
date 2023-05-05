"use client"

import { useEffect, useState } from "react"

const PageLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    setLoadingProgress(0)

    let current = 0

    const progressFlow = () => {
      setTimeout(function () {
        current = current + Math.random()
        const currentToAdd = Math.round(current++)
        if (current == 99) {
          setLoadingProgress(100)
          return
        } else {
          setLoadingProgress(currentToAdd)
        }

        if (current < 100) {
          progressFlow()
        } else {
          return
        }
      }, 5)
    }

    progressFlow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const loadingElem = document.getElementById("_BLAZE_LOADING_")
    if (loadingElem) {
      if (loadingProgress > 98) {
        loadingElem.classList.add("opacity-0")
      }
    }
  }, [loadingProgress])

  return (
    <div
      id="_BLAZE_LOADING_"
      className="bg-defaultBlaze fixed inset-0 z-[999999] flex items-center justify-center"
    >
      <div className="flex flex-col gap-3">
        <span className="text-center">Speeding through 🔥</span>
        <progress
          className="progress progress-primary w-56"
          value={loadingProgress}
          max="100"
        ></progress>
      </div>
    </div>
  )
}
export default PageLoader
