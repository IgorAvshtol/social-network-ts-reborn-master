import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames"
import { Button } from "antd";


type PaginatorType = {
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
    onPageChanged: (p: number) => void
}


const Paginator = (props: PaginatorType) => {



    let portionSize = 10

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <Button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</Button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: props.currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <Button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }
        }>Next</Button>}

    </div>
}


export default Paginator
