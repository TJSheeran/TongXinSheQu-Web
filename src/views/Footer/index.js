import { Layout } from 'antd';
const { Footer } = Layout;

const CommonFooter = () => {
    return (
        <Footer
        style={{
            alignItems: 'center',
            textAlign: 'center',
        }}>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" style={{color:'black'}}>沪ICP备2024041795号-1</a >
        </Footer>
    );
};
export default CommonFooter;