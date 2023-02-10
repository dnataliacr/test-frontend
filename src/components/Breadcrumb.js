import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);

const BreadCrumb = ({ categories, loading }) => {

    return <ol className='breadcrumb'>
        {categories?.length > 0 && !loading &&
            categories?.map((category, index) => (
                index <= 4 && <li key={category}>
                    <Link to='' onClick={(e) => e.preventDefault()}>
                        {category}
                    </Link>
                    {
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                        </span>
                    }

                </li>
            )
            )
        }
        {
            loading && <li>
                Cargando categorías...
            </li>
        }
    </ol >
}

export default BreadCrumb
