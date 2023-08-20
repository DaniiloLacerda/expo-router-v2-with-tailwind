import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-zinc-700">
        <Text style={{ fontSize: 44, fontWeight: "700" }}>Home</Text>

        <Link href="/product/15" asChild>
          <Button title="Configurações" />
        </Link>
      </View>
    </>
  );
}
