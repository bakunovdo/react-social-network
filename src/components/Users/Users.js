import React from "react"

import s from "./Users.module.scss"
import UserItem from "./UserItem/UserItem";
import Pagination from '@material-ui/lab/Pagination';
import AnimatedLoading from "../../assets/images/Loading";

const Users = (props) => {

  const usersElements = props.users.map((user) => <UserItem key={"UserItem " + user.id}
                                                                 id={user.id}
                                                                 photoS={user.photos.small}
                                                                 fullName={user.name}
                                                                 followed={user.followed}
                                                                 status={user.status}
                                                                 toggleFollow={props.toggleFollow}/>)

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  // let pages = []
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i)
  // }

  // const paginationElements = pages.map((page) => {
  //   return (
  //       <span className={props.currentPage === page ? s.selectedPage : undefined}
  //             key={"pagination " + page}
  //             onClick={() => {
  //               props.onPageChanged(page)
  //             }}
  //       >
  //       {page}
  //     </span>)
  // })

  return (
      <div className={s.pageUsers + " pageBlock"}>
        <div className={s.blockPeople}>
          <div className={s.header}>
            People
          </div>

          <div className={s.search}>
            <textarea
                placeholder={"Найти кого-то..."}
                rows={1}
            />
            {/*<button onClick={this.findUsers}> Найти</button> */}
          </div>

          <div className={s.pagination}>
            <Pagination count={pagesCount} page={props.currentPage} onChange={props.onPageChanged}
                        siblingCount={2} boundaryCount={2} defaultPage={1} defaultValue={1}
                        variant="outlined" color={"secondary"} shape={"rounded"}/>
          </div>

          <div className={s.userList}>
            {props.isFetching ? <AnimatedLoading /> : usersElements}
          </div>
        </div>

      </div>
  )
}

export default Users


