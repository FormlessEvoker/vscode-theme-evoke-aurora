defmodule Aurora do
  @moduledoc """
  A small Elixir sample for atoms, maps, guards, pipes, sigils, and pattern matching.
  """

  @type shade :: :mint | :violet | :blue
  @palette %{mint: "#CFFFE7", violet: "#B99CFF", blue: "#84B5F2"}

  def evoke(%{shade: shade, visible?: true} = sky) when shade in [:mint, :violet, :blue] do
    sky
    |> Map.put(:color, Map.fetch!(@palette, shade))
    |> Map.put(:pattern, ~r/aurora-(#{shade})/i)
  end

  def evoke(_cloud), do: {:error, :not_visible}
end
