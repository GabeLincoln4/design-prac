const styles = {
    hero: {
        all: "grid grid-cols-2 bg-neutral",
        textBox: "grid bg-secondary col-span-2 p-2 row-start-2 text-center text-black",
        title: "font-bold mb-5 text-5xl w-full",
        slogan: "font-bold font-serif justify-self-center text-xl text-accent w-2/3"
    },
    image: "justify-self-center p-2",
    about: {
        all: "bg-secondary grid px-5 py-3 text-black",
        bio: "bg-tertiary rounded-2xl p-3 w-full mt-3 mb-5",
        title: "font-bold text-4xl text-white mb-5",
        content: "font-serif text-lg",
        mission: "grid",
        missionTitle: "bg-tertiary font-bold p-2 rounded-2xl text-4xl text-white mb-5 w-1/2 justify-self-right",
    },
    contact: {
        all: "bg-neutral p-3",
        title: "font-bold text-center text-4xl",
        info: "bg-tertiary grid grid-cols-2 p-2 place-content-around rounded text-center text-xl mt-5 mb-3",
    },
    footer: {
        all: "bg-tertiary text-white px-2 pb-3",
        info: "flex justify-between pt-3",
        social: "grid-cols-2 grid",
        icon: "mx-2"
    }
}

export default styles;