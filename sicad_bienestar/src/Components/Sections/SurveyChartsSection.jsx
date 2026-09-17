import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { formatChartData } from "../../utils/calculations";
import Badge from "../UI/Badge";
import EmptyState from "../UI/EmptyState";
import "./SurveyChartsSection.css";

const CHART_TYPES = [
  { id: "bar", label: "Barras" },
  { id: "radar", label: "Radar" },
];

/**
 * Gráfica dinámica: los datos, el color y el dominio cambian por completo
 * según la persona de Bienestar seleccionada (prop `survey` + `staffColor`).
 * El toggle Barras/Radar es lo único "vistoso" de la app, a propósito —
 * el resto de las secciones se mantiene tipográfico y sobrio.
 */
function SurveyChartsSection({ survey, staffColor }) {
  const [chartType, setChartType] = useState("bar");

  if (!survey) return <EmptyState />;

  const chartData = formatChartData(survey.metrics);

  return (
    <div className="charts-section">
      <div className="chart-controls">
        <p className="chart-caption">
          Métricas de encuesta (escala 0–10, salvo donde se indique la unidad)
        </p>
        <div className="chart-toggle" role="tablist" aria-label="Tipo de gráfica">
          {CHART_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              role="tab"
              aria-selected={chartType === type.id}
              className={`chart-toggle-btn ${chartType === type.id ? "is-active" : ""}`}
              onClick={() => setChartType(type.id)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-frame">
        <ResponsiveContainer width="100%" height={340}>
          {chartType === "bar" ? (
            <BarChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 8 }}>
              <CartesianGrid stroke="#E4E7E1" vertical={false} />
              <XAxis
                dataKey="shortLabel"
                tick={{ fontFamily: "Inter", fontSize: 11, fill: "#5B6B60" }}
                interval={0}
                angle={-18}
                textAnchor="end"
                height={70}
              />
              <YAxis tick={{ fontFamily: "Inter", fontSize: 11, fill: "#5B6B60" }} />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
                contentStyle={{ fontFamily: "Inter", fontSize: 12, border: "1px solid #DDE3DA" }}
                formatter={(value, _name, item) => [value, item.payload.label]}
              />
              <Bar dataKey="value" fill={staffColor} radius={[3, 3, 0, 0]} maxBarSize={46} />
            </BarChart>
          ) : (
            <RadarChart data={chartData} outerRadius="72%">
              <PolarGrid stroke="#E4E7E1" />
              <PolarAngleAxis
                dataKey="shortLabel"
                tick={{ fontFamily: "Inter", fontSize: 11, fill: "#5B6B60" }}
              />
              <PolarRadiusAxis tick={{ fontFamily: "Inter", fontSize: 10, fill: "#8A9690" }} />
              <Radar
                dataKey="value"
                stroke={staffColor}
                fill={staffColor}
                fillOpacity={0.28}
              />
              <Tooltip
                contentStyle={{ fontFamily: "Inter", fontSize: 12, border: "1px solid #DDE3DA" }}
                formatter={(value, _name, item) => [value, item.payload.label]}
              />
            </RadarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="chart-closed-question">
        <p className="chart-closed-question-text">{survey.closedQuestion.question}</p>
        <div className="chart-closed-options">
          {survey.closedQuestion.options.map((option) => (
            <Badge
              key={option}
              text={option}
              color={option === survey.closedQuestion.selected ? staffColor : "#DDE3DA"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SurveyChartsSection;
