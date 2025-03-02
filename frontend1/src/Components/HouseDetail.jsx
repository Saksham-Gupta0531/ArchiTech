export const HouseDetail = () => {
    const location = useLocation();
    const { title } = location.state || {};
    
    const imagePaths = {
        "Luxury House": require.context('../image/Luxury_House', false, /\.jpg$/),
        "Standard House": require.context('../image/Standard_House', false, /\.jpg$/),
        "Studio House": require.context('../image/Studio_House', false, /\.jpg$/),
        "Villa House": require.context('../image/Villa_House', false, /\.jpg$/)
    };
    
    const images = title && imagePaths[title] ? imagePaths[title].keys().map(imagePaths[title]) : [];
    
    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
            <h2 style={{ color: 'white' }}>{title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                {images.map((img, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <img src={img} alt={`${title} ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};