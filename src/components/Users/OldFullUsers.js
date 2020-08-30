import React from "react"
import * as axios from "axios";


class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {

      const params = {
        count: this.props.pageSize,
        page: this.props.currentPage
      }

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${params.page}&count=${params.count}`)
          .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
          })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)

    const params = {
      count: this.props.pageSize,
      page: pageNumber }

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${params.page}&count=${params.count}`)
        .then((response) => {
          this.props.setUsers(response.data.items)
        })
  }

  render() {
    const usersElements = this.props.users.map((user) => <UserItem key={"UserItem " + user.id}
                                                                   id={user.id}
                                                                   photoS={user.photos.small}
                                                                   fullName={user.name}
                                                                   followed={user.followed}
                                                                   status={user.status}
        // location={user.location}
                                                                   toggleFollow={this.props.toggleFollow}/>)


    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++ ) {
      pages.push(i)
    }

    const paginationElements = pages.map((page) => {
      return (
      <span className={this.props.currentPage === page ? s.selectedPage : undefined}
            key={"pagination " + page}
            onClick={ () => {this.onPageChanged(page)} }
      >
        {page}
      </span>)})

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
              {paginationElements}
            </div>

            <div className={s.userList}>
              {usersElements}
            </div>
          </div>

          {/*<div className={s.filterBlock}>*/}

          {/*</div>*/}
        </div>
    )
  }
}

// export default Users
