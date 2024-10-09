'use client'
import { FC,useState, useEffect } from "react";


const Emoji: FC = () => {
    const [emoji, setEmoji] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // fetch a random emoji from the API
    const fetchRandomEmoji = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://emojihub-1001447344924.asia-southeast2.run.app/api/random');
            if (!response.ok) {
                throw new Error('Error: ${response.statusText}');
            }

            const data = await response.json();
            setEmoji(data.htmlCode[0]); // set the emoji html code
            setLoading(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An Unknown Error occurred.')
            }
            setLoading(false);
        }
    };

    // fetch a random emoji when the component mounts
    useEffect(() => {
        fetchRandomEmoji();
    }, []);

    // handle click event to fetch a new random emoji
    const handleEmojiClick = () => {
        fetchRandomEmoji();
    }

    if (loading) return <p>Loading emojis...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="text-[50px] cursor-pointer" onClick={handleEmojiClick}>
            {emoji ? <span dangerouslySetInnerHTML={{ __html: emoji }} /> : 'no emoji found'}
        </div>
    )
}

export default Emoji;