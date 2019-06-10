import React from 'react';
import { connect } from 'dva';
import styles from './home.css';
import "antd/dist/antd.css";
function IndexPage() {
  return (
   <div className={styles.box}>
     home
   </div>
  );
  // return (
  //     <div className={styles.box}>
  //       <form className={styles.fromBox}>
  //         <div className={styles.fromBox_item}>
  //          <Icon type="user" className={styles.user} />
  //           <input  type="text"  className={styles.ipt}/>
  //         </div>
  //         <div className={styles.fromBox_item}>
  //         <Icon type="lock" className={styles.user} />
  //           <input className={styles.ipt} type="password"/>
  //         </div>
  //       </form>
  //     </div>
  // );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
