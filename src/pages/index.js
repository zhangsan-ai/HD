import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        {/*Docusaurus Tutorial - 5min ⏱️*/}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="HD"
            description="HD">
            <main style={{maxWidth: '900px', margin: '0 auto', padding: '2rem 0'}}>

                {/* ✨️ 概述 */}
                <section style={{marginBottom: '2rem'}}>
                    <h1>✨️ 概述</h1>
                    <ol style={{lineHeight: '2'}}>
                        <li>自研驱动注入，模拟键鼠，读写内存相关操作，进程以及线程相关操作等。</li>
                        <li>自研接口注入模式框架。</li>
                        <li>目前支持 32 位/64位/ASCII/UNICODE（8个版本中控）&lt;-&gt;32/64位（目标程序）。</li>
                        <li>还支持 LUA 编写、自定义模块、谷歌内置浏览器、主板机投屏、多线程框架模块、yolov5 等操作。</li>
                        <li>支持易语言、C/C++、火山、Python、C#、炫语言、golang 等语言（支持调用 C++ DLL 的语言）。</li>
                        <li>具体看对应的模块功能接口。</li>
                        <li>支持 win7/8/10/11 系统。</li>
                    </ol>
                </section>

                {/* 📖 实用教程 */}
                <section style={{marginBottom: '2rem'}}>
                    <h2>📖 使用教程</h2>
                    <p>课程不断更新中</p>
                    <ul>
                        <li><a href="http://www.didacollege.com/site-list-39" target="_blank"
                               rel="noopener">教程合集</a></li>
                        <li>B站：<a href="https://space.bilibili.com/436340181" target="_blank"
                                   rel="noopener">https://space.bilibili.com/436340181</a></li>
                        <li>官网：<a href="https://www.hdgdk.com" target="_blank"
                                    rel="noopener">https://www.hdgdk.com</a></li>
                    </ul>
                </section>


                <div className="course-group">
                    <h2>📖 一、HD易语言课程</h2>
                    <ul className="course-list">
                        <li><a
                            href="https://www.bilibili.com/video/BV1UgJFz5EKN/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD易语言基础课程</a></li>
                        <li><a
                            href="https://www.bilibili.com/video/BV1UgJFz5EKN/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD易语言多线程框架实战课程</a></li>
                    </ul>
                </div>

                <div className="course-group">
                    <h2>📖 二、HD火山基础课程</h2>
                    <ul className="course-list">
                        <li><a
                            href="https://www.bilibili.com/video/BV1iBftYoE5b/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD火山基础课程</a></li>
                    </ul>
                </div>

                <div className="course-group">
                    <h2>📖 三、HD C++课程</h2>
                    <ul className="course-list">
                        <li><a
                            href="https://www.bilibili.com/video/BV1G9fnYeEEp/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD C++基础课程</a></li>
                        <li><a
                            href="https://www.bilibili.com/video/BV1G9fnYeEEp/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD C++多线程框架实战课程</a></li>
                        <li><a
                            href="https://www.bilibili.com/video/BV1Ei1sYsELz/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD C++ 夜鸦国际服实战课程</a></li>
                    </ul>
                </div>

                <div className="course-group">
                    <h2>📖 四、HD Python基础课程</h2>
                    <ul className="course-list">
                        <li><a
                            href="https://www.bilibili.com/video/BV1rtRAYXEwQ/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD Python基础课程</a></li>
                    </ul>
                </div>

                <div className="course-group">
                    <h2>📖 五、HD 炫语言基础课程</h2>
                    <ul className="course-list">
                        <li><a
                            href="https://www.bilibili.com/video/BV1LJXGYPEXy/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD 炫语言基础课程（1）</a></li>
                        <li><a
                            href="https://www.bilibili.com/video/BV1UNqdYqEBQ/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD 炫语言基础课程（2）</a></li>
                    </ul>
                </div>

                <div className="course-group">
                    <h2>📖 六、HD 综合工具使用教程</h2>
                    <ul className="course-list">
                        <li><a
                            href="https://www.bilibili.com/video/BV1nscbeVEfY/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD 综合工具使用教程</a></li>
                    </ul>
                </div>

                <div className="course-group">
                    <h2>📖 七、HD Yolov8综合工具使用教程</h2>
                    <ul className="course-list">
                        <li><a
                            href="https://www.bilibili.com/video/BV13c3vzfE2D/?spm_id_from=333.1387.homepage.video_card.click"
                            target="_blank" className="course-link">🔗HD Yolov8综合工具使用教程</a></li>
                    </ul>
                </div>


                {/* 📝 使用条款 */}
                <section style={{marginBottom: '2rem'}}>
                    <h2>免责声明</h2>
                    <ol style={{lineHeight: '2'}}>
                        <li>本软件完全出于个人兴趣爱好，由本人在业余时间开发，是一款安全，绿色，可靠的软件产品。</li>
                        <li>利用本软件所做出的任何软件作品，和本人无关。</li>
                        <li>本软件绝对不针对任何一款游戏或者游戏开发商，如果有人利用本软件开发非法游戏辅助，本人将保留追究其民事以及刑事责任的权利。</li>
                        <li>因使用本软件而引致的任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成的任何损失，本人概不负责，亦概不承担任何民事或刑事法律责任。</li>
                        <li>当你第一次开始使用本人所提供的任何软件及资源那一刻起就将被视为对本声明全部内容的认可。同时您必须认可上述免责条款，方可使用本软件及资源。如有任何异议，建议立刻删除本软件及资源并且停止使用。</li>
                        <li>以上内容，本人保留最终解释权。</li>
                    </ol>
                </section>


                {/* 页脚/备案/作者信息 */}
                {/* 页脚已删除，如需恢复请联系我 */}
            </main>
        </Layout>
    );
}
