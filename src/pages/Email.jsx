import Social from "../components/Social";
import Text from "../components/Text";
function Email() {
  return (
    <div className="flex w-full px-8">
      <div className="w-4/5  px-20">
        <Social></Social>
      </div>
      <div className="w-96 px-4">
        <Text></Text>
      </div>
    </div>
  );
}
export default Email;
