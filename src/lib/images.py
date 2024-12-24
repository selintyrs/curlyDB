from PIL import Image
import os

# Aktuelles Skriptverzeichnis bestimmen
base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../static/images"))

# Ordnerpfade
input_folder = os.path.join(base_dir, "hairtypes")
output_folder = os.path.join(base_dir, "hairtypes_final")

def resize_images(input_folder, output_folder, size=(400, 400)):
    # Output-Ordner erstellen, falls nicht vorhanden
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Bilder im Eingabeordner durchgehen
    for filename in os.listdir(input_folder):
        if filename.endswith(('.png', '.jpg', '.jpeg')):
            try:
                # Bild öffnen
                img_path = os.path.join(input_folder, filename)
                img = Image.open(img_path)

                # Zuschneiden und auf die gewünschte Größe skalieren
                img_resized = img.resize(size, Image.Resampling.LANCZOS)

                # Neues Bild speichern
                output_path = os.path.join(output_folder, filename)
                img_resized.save(output_path)

                print(f"{filename} wurde erfolgreich bearbeitet und gespeichert.")
            except Exception as e:
                print(f"Fehler bei der Bearbeitung von {filename}: {e}")

# Größe anpassen (400x400 px als Beispiel)
resize_images(input_folder, output_folder, size=(200, 200))
