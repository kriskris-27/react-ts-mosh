const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // ✅ clean up
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
};
