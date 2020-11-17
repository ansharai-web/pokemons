import {useCallback, useEffect, useState} from 'react'

export const useScroll = (list: any[]) => {
    const [currentItemesNumber, setCurrentItemesNumber] = useState<number>(20)
    const handleLoadMore = useCallback(() => {
        const newcurrentItemesNumber = (list.length > 0) && (currentItemesNumber + 10) > list.length ? list.length : currentItemesNumber + 10
        setCurrentItemesNumber(newcurrentItemesNumber)
    },[currentItemesNumber, list.length])

    useEffect(() => {
        const handleScroll = () => {
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                handleLoadMore()
            }
        }
        document.addEventListener('scroll',() =>{
            handleScroll()
        })
        // unmount
        return () => {
            // clear event listener
            document.removeEventListener('scroll', handleScroll)
        }
    },[handleLoadMore])

    return {currentItemesNumber}
}
