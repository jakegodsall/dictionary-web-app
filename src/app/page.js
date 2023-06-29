import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DefinitionSection from './components/DefinitionSection';

export default function Home() {
    return (
        <div className='w-screen h-screen bg-primary text-primary font-primary'>
            <Header />
            <main className='mx-6 flex flex-col items-center'>
                <SearchBar />
                <DefinitionSection />
            </main>
        </div>
    );
}
