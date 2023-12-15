import { Platform } from "../services/platform-service";
import usePlatforms from "./usePlatforms";

const usePlatform = (platformId) => {
  const { data } = usePlatforms();
  return data?.results?.find((platform) => platform.id === platformId)?.name || null;
} 

export default usePlatform;
