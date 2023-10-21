import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main>
      <div>
        <div
            className="absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl "
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <button className="inline-flex  items-center justify-center w-full rounded-none bg-gradient-to-r text-xl text-center text-white px-5 py-2 from-[#7775d6] to-[#fa37d0]">Hey!</button>
            <div className='pt-32 md:pt-40 z-50 relative'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-4xl text-center'>
                  <h1 className='text-4xl md:text-7xl font-bold tracking-tight text-black dark:text-white pb-2'>Chat with Anyone, anywhere!</h1>
                  <p className='mt-6 text-sm md:text-xl font-light md:font-medium leading-6 text-gray-600 dark:text-gray-300'>You speak your language, they speak their language.<span className='text-indigo-600 dark:text-[#686bff]'> Let AI handle the translation.</span></p>
                  <div className='flex  flex-row gap-10 justify-center pt-10'>
                    <Button variant='indigo' size={'lg'} className='font-light text-sm md: '><a href="/chat">Get Started</a></Button>
                    <Button variant='ghost' size={'lg'} className='font-light text-sm'>view Code</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
