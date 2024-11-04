import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

interface SearchCFilters {
  title: string[];
}

function Filters({ title }: SearchCFilters) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(title[0] || null);

  // Função que define o item selecionado
  const handlePress = (item: string) => {
    setSelectedCategory(item);
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={title}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              {
                backgroundColor: item === selectedCategory ? "#D3B398" : "#F4F4F4", // Cor diferente para o item selecionado
              },
            ]}
            onPress={() => handlePress(item)}
          >
            <Text style={[styles.categoryText, {color: item === selectedCategory ? '#fff' : '#A7A7A7',}]}>{item}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 12,
  },
  categoryText: {
    fontSize: 17,
    fontFamily: "MontserratMedium", // fonte padrão do projeto
  },
});

export default Filters;
