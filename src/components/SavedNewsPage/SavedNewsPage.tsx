import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";

type SavedNewsPageProps = {
  savedNewsCards: Array<any>;
  onSignOutClick: () => void;
  isLoggedIn: boolean;
  onSignInClick: () => void;
  userName: string;
};

function SavedNewsPage({ savedNewsCards, onSignOutClick, isLoggedIn, onSignInClick, userName }: SavedNewsPageProps) {
  return (
    <div>
      <Header
        onSignOutClick={onSignOutClick}
        isLoggedIn={isLoggedIn}
        onSignInClick={onSignInClick}
        userName={userName}
      />
      <SavedNews userName={userName} savedNewsCards={savedNewsCards} isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
}

export default SavedNewsPage;
