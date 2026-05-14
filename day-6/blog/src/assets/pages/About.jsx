import Header from '../components/Header'


export const About = () => {

  return (
    <>
      <main>
        <section>
          <title>About </title>
          <div>
            <Header />
          </div>
          <div className='min-h-screen dark:bg-slate-900 dark:text-white flex items-center justify-center '>
            <h1 className='text-center text-3xl font-bold'>About...</h1>
          </div>
        </section>
      </main>
    </>
  )
}
