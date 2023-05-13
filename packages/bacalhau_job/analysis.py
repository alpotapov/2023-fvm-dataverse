import seaborn as sns
import matplotlib.pyplot as plt

# Example FHIR records
fhir_records = [
    {
        "resourceType": "Observation",
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "72166-2",
                    "display": "Sleep duration"
                }
            ]
        },
        "valueQuantity": {
            "value": 7,
            "unit": "hours"
        }
    },
    {
        "resourceType": "Observation",
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "72166-2",
                    "display": "Sleep duration"
                }
            ]
        },
        "valueQuantity": {
            "value": 6,
            "unit": "hours"
        }
    },
    {
        "resourceType": "Observation",
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "72166-2",
                    "display": "Sleep duration"
                }
            ]
        },
        "valueQuantity": {
            "value": 8,
            "unit": "hours"
        }
    },
    {
        "resourceType": "Observation",
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "72166-2",
                    "display": "Sleep duration"
                }
            ]
        },
        "valueQuantity": {
            "value": 5,
            "unit": "hours"
        }
    }
]

# Extract values from FHIR records
sleep_duration = [record["valueQuantity"]["value"] for record in fhir_records]

# Example obesity likelihood data
obesity_likelihood = [0.2, 0.3, 0.1, 0.4]

# Create a scatter plot using Seaborn
sns.scatterplot(x=sleep_duration, y=obesity_likelihood)
plt.xlabel('Sleep Duration (hours)')
plt.ylabel('Obesity Likelihood')
plt.title('Relationship between Sleep Duration and Obesity Likelihood')
plt.show()
