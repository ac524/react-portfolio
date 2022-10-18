export const Profile = () => {
    return (
        <div className="p-3 flex items-center" style={{minHeight:"calc(100vh - 48px)"}}>
            <div className="mx-auto w-full md:w-1/2">
                <div>
                    <img className="h-auto w-96 mx-auto rounded-full drop-shadow-lg" src="https://media4.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=ecf05e47tcx8khwuxflx1t3fs6g97klsodava0s6cqmp928s&rid=giphy.gif&ct=g" alt="Look at me ride this cool motorcycle" />
                </div>
                <div className="mt-5 text-center">
                    <h2 className="text-3xl font-bold mb-2">Hi! I'm Anthony</h2>
                    <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
                </div>
            </div>
        </div>
    );
}