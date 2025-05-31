import React from 'react'
import Header from '@/components/layout/Header'

const index = () => {
    return (
        <div>
            <Header />
            <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                        Welcome to the Posts Page!
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Here you can find all the latest posts.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default index
