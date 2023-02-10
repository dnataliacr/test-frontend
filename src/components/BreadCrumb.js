import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);
const BreadCrumb = ({ categories }) => {

    return <ol className='breadcrumb'>
        {categories?.length > 0 &&
            categories?.map((category, index) => (
                index <= 2 && <li>
                    <Link to='' onClick={(e) => e.preventDefault()}>
                        {category}
                    </Link>
                    {
                        index < 2 && <span>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                        </span>
                    }
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