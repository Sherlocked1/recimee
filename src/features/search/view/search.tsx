import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native"
import { MyField } from "../../core/components/MyTextfield";
import { Colors } from "../../core/constants/constants";

const SearchView = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    
    useEffect(()=>{
        console.log('search')
    },[searchQuery])
    return (
        <SafeAreaView>
            <MyField icon={{ name: 'search', size: 30 }}
                onChangeText={setSearchQuery} placeholder='Search'
                textColor={Colors.secondary}
                style={
                    {
                        backgroundColor: Colors.light_grey,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        padding:10
                    }
                }
            />
        </SafeAreaView>
    )
}

export default SearchView;