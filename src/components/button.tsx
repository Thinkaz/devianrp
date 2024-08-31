export default function Button({text, lien} : {text: string, lien: string}){
    return(
        <div className="flex justify-center pt-14">
            <a href={lien} className="border-2 border-pink-600 rounded-md px-4 py-2 dark:text-white font-semibold hover:bg-pink-600 hover:text-white transition duration-150 ease-in-out">
                {text}
            </a>
        </div>
    )
}