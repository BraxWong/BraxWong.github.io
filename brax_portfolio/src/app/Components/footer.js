import styles from "../../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={`${styles.color} flex flex-col dark:bg-gray-900 p-4`}>
            <div className="mx-auto w-full max-w-screen-xl p-2 py-4 lg:py-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-4 md:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Contact Me</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-4 sm:grid-cols-2">
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://www.linkedin.com/in/brax-wong-084076247/" className="hover:underline">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://github.com/BraxWong" className="hover:underline ">Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Brax Wong. All Rights Reserved.
                    </span>
                    <div className="flex mt-2 sm:justify-center sm:mt-0">
                        <a href="https://www.instagram.com/brax_wls/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.162c3.207 0 3.6.012 4.869.07 1.2.058 2.04.248 2.5.418.59.238 1.04.55 1.5 1.01.46.46.78.91 1.01 1.5.17.46.36 1.3.418 2.5.058 1.269.07 1.662.07 4.869s-.012 3.6-.07 4.869c-.058 1.2-.248 2.04-.418 2.5-.238.59-.55 1.04-1.01 1.5-.46.46-.91.78-1.5 1.01-.46.17-1.3.36-2.5.418-1.269.058-1.662.07-4.869.07s-3.6-.012-4.869-.07c-1.2-.058-2.04-.248-2.5-.418-.59-.238-1.04-.55-1.5-1.01-.46-.46-.78-.91-1.01-1.5-.17-.46-.36-1.3-.418-2.5C2.162 15.762 2.15 15.368 2.15 12s.012-3.6.07-4.869c.058-1.2.248-2.04.418-2.5.238-.59.55-1.04 1.01-1.5.46-.46.91-.78 1.5-1.01.46-.17 1.3-.36 2.5-.418C8.4 2.162 8.793 2.15 12 2.15zm0-2.162C8.743 0 8.4.014 7.05.07 5.76.126 4.68.332 3.85.52 2.47.793 1.38 1.76.52 3.15.332 4.68.126 5.76.07 7.05.014 8.4 0 12 0 12s0 3.6.07 4.869c.056 1.269.262 2.35.52 3.15.793 2.47 2.76 3.46 4.15 3.85 1.3.188 2.303.292 3.15.35 1.369.056 1.7.07 4.869.07s3.6 0 4.869-.07c.847-.058 1.85-.162 3.15-.35 1.39-.39 2.36-1.38 2.65-3.85.258-.8.464-1.88.52-3.15.07-1.269.07-1.6.07-4.869s0-3.6-.07-4.869c-.056-1.269-.262-2.35-.52-3.15-.39-1.39-1.38-2.36-3.85-2.65C16.6.014 15.607 0 12 0zM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm6.5-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="https://github.com/BraxWong" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="https://www.linkedin.com/in/brax-wong-084076247/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            <span className="sr-only">Linkedin account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}