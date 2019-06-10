import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";

function IndexPage() {
  return (
   <div className={styles.box}>
      <Form.Item>
            <Input
              className={styles.ipts}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              className={styles.ipts}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
          <div className={styles.lefts}>
          <Checkbox>记住密码</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          </div>
          <Button type="primary" htmlType="submit" className={styles.loginBtn}>
            登录
          </Button>
       
        </Form.Item>
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
