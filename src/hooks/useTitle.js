import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title=title+'-Quick Learn';
    }, [title])
}
export default useTitle;