import React from "react"
import { Link } from "react-router-dom"

const BreadCrumb = ({ categories }) => {

    return <ol className='breadcrumb'>
        {categories?.length > 0 &&
            categories?.map((category, index) => (
                index <= 2 && <li>
                    <Link to='' onClick={(e) => e.preventDefault()}>
                        {category}
                    </Link>
                </li>
            )
            )
        }
        {
            categories?.length <= 0 &&
            <li>
                Sin categoría
            </li>
        }
    </ol >
}

export default BreadCrumb