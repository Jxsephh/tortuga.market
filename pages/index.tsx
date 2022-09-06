import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Content from '../components/atoms/Layout/Content';
import Footer from '../components/atoms/Layout/Footer';
import Header from '../components/atoms/Layout/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <>
            <Header>Header</Header>
			<Content>Content</Content>
			<Footer>Footer</Footer>
        </>
    );
};

export default Home;
