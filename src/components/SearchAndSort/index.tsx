import { usePlanetStore } from "@/src/domain/store/planet.store";
import { Container, Input, Select } from "./styled";

export default function SearchAndSort() {
  const { searchTerm, sortOrder, setSearchTerm, setSortOrder } =
    usePlanetStore();

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search planets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
      >
        <option value="asc">Name (A-Z)</option>
        <option value="desc">Name (Z-A)</option>
      </Select>
    </Container>
  );
}
