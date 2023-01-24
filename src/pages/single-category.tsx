import { useParams } from "react-router-dom"

export const SingleCategory = () => {
   const {bookId} = useParams()

    return(
        <>
        <h2>Single Category</h2>
        <div>
            {bookId}
        </div>
        </>
    )
}
