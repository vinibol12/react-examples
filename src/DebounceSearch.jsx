import { useEffect, useState } from 'react';

export default function DebounceSearch() {
    const [isFocused, setIsFocused] = useState(false);
    
    // Apparent improvements: 
    // Only search when a min number of digits in the input
    // Don't search unless the value has changed since last search
    useEffect(() => {
        let interval;
        if (isFocused) {
            interval = setInterval(() => {
                console.log('Debounced search');
            }, 2000);
        }

        return () => clearInterval(interval); 
    }, [isFocused]);
    
    
    return (
        <div>
            <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )

    
 
//  In the above code, we have created a  DebounceSearch  component that uses the  useEffect  hook to debounce a search operation. We have used the  setTimeout  function to delay the search operation by 1000 milliseconds. 
//  When the component mounts, the  setTimeout  function is called, and after 1000 milliseconds, the search operation is executed. If the component unmounts before the 1000 milliseconds, the  clearTimeout  function is called to clear the timeout. 
//  Conclusion 
//  In this article, we have discussed the  useEffect  hook in React. We have seen how to use the  useEffect  hook to perform side effects in a functional component. We have also discussed how to use the  useEffect  hook to perform cleanup operations when a component unmounts. 
//  We have also seen how to use the  useEffect  hook to debounce a search operation. 
//  I hope this article has helped you understand the  useEffect  hook in React.
}

